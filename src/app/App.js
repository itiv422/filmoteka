import React from 'react';
import '../css/main.scss';
import HeaderComponent from './components/header/HeaderComponent';
import ContentComponent from './components/content/ContentComponent';
import FooterComponent from './components/footer/FooterComponent';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import DeleteFilmModal from './components/modals/DeleteFilmModal';
import UpdateFilmModal from './components/modals/UpdateFilmModal';

export default function App() {
  return (
        <>
            <HeaderComponent/>
            <DeleteFilmModal/>
            <UpdateFilmModal/>
            <ErrorBoundary>
                <ContentComponent/>
            </ErrorBoundary>
            <FooterComponent/>
        </>
  );
}
