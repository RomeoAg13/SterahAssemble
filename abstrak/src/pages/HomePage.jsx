import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import DigitalAgency from './DigitalAgency';

const HomePage = () => {

    return (
        <>
        <SEO title="Digital Creative Agency, Corporate and Portfolio React JS Template" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <DigitalAgency />
            </main>
        </>
    )
}

export default HomePage;