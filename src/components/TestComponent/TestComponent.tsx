import { ReactNode } from 'react';
import s from './testComponent.module.scss';

export default function TestComponent({ children }: { children: ReactNode }) {
  return <div className={s.text}>{children}</div>;
}
