import React from 'react';
import './index.scss';

const headerComponent = () => <header className={'app-header'}>
        <div className={'header-title-section'}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
                className={'netflix-logo'} alt=""/>
            <a className={'button transparent-btn'}>+ add movie</a>
        </div>
        <div className={'app-header-search-section'}>
            <h1>find your movie</h1>
            <div className={'app-header-search-form'}>
                <input className={'header-search-input'} type='text' placeholder='What do you want to watch?'/>
                <a className={'button'}>search</a>
            </div>
        </div>
    </header>;

export default headerComponent;
