import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from "../Sidebar/Sidebar";

import './MainLayout.css';

type Props = {
  children?: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="main-layout">
      <header className="main-layout__header">
        <Header />
      </header>

    <aside className="main-layout__sidebar">
      <Sidebar />
    </aside>

      <main className="main-layout__content">
        {children}
      </main>

      <footer className="main-layout__footer">
        <Footer />
      </footer>
    </div>
  );
}
