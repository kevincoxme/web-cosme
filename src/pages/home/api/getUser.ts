import { useQuery } from '@tanstack/react-query';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

import { db } from '@/lib/firebase';
import type { User } from '@/types/user';

const USERS_COLLECTION = 'users';

export async function getUsers(): Promise<User[]> {
  const usersQuery = query(collection(db, USERS_COLLECTION), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(usersQuery);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<User, 'id'>),
  }));
}

export function useGetUsers() {
  return useQuery({
    queryKey: [USERS_COLLECTION],
    queryFn: getUsers,
  });
}
