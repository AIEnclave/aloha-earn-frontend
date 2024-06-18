"use client";

import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import Button from '@/components/ui/Button';
import Modal from '@/components/ui/Modal';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/navigation';
import Input from '@/components/ui/Input';
import TextArea from '@/components/ui/TextArea';
import { useMutateEvaluation } from "@/hooks/evaluation";
import { useFetchAiResponses } from '@/hooks/airesponses';

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [rankingType, setRankingType] = useState(null);
  const [aiPosts, setAiPosts] = useState([]);
  
  const openModal = () => setModalOpen(true);
  const { mutate } = useMutateEvaluation();
  const closeModal = () => setModalOpen(false);

  const selectedForRanking = (id, type) => {
    setSelectedPost(id);
    openModal();
    setRankingType(type);
  };

  const submitReason = (data) => {
    const newAiPost = aiPosts.filter(post => post.id !== selectedPost);
    setAiPosts([...newAiPost]);
    closeModal();
    setSelectedPost(null);
    setRankingType(null);
    mutate({ reason: data.reason });
    reset()
  };

  const { data, isLoading, error } = useFetchAiResponses();

  const validationSchema = Yup.object().shape({
    reason: Yup.string()
      .required('Reason is required')
      // .min(20, 'Reason must be at least 20 characters')
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(() => {
    if (data) {
      setAiPosts(data);
    }
  }, [data, isLoading, error]);

  return (
    <div className={styles.container}>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => {
          closeModal();
          reset()
        }}>
          <h2>Add Reason</h2>
          <p>Add your reason why think it should be upvoted or downvoted</p>
          <form onSubmit={handleSubmit(submitReason)}>
            <div className={styles.flexcol}>
              <textarea {...register('reason')} rows={5} />
              <span>{errors.reason?.message}</span>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Modal>
      )}
      {aiPosts.map(post => (
        <div key={post.id} className={styles.inner}>
          <h2>{post.prompt}</h2>
          <p>{post.content}</p>
          <div className={styles.flexBtnGroup}>
            <Button onClick={() => selectedForRanking(post.id, "upvote")}>Upvote</Button>
            <Button onClick={() => selectedForRanking(post.id, "downvote")}>Downvote</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
