import { useState, useEffect} from 'react';
import {onAuthStateChange } from '../firebase.config';

export const USER_STATE={
    NOT_LOGGED: null,
    NOT_KNOWN: undefined
}

export default function useUser() {
    const [user, setUser] = useState(USER_STATE.NOT_KNOWN)

      useEffect(() => {
    onAuthStateChange(setUser)
  }, [])

  return user
}