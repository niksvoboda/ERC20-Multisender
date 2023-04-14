import React, { useState, useContext, useEffect } from 'react';
import Aside from '../components/UI/aside';
import Navbar from '../components/UI/navbar';
import Side_conf from '../components/UI/side_conf';

const Tpl_main = (props) => {
const {page} = props;
const [side_conf_show, set_side_conf_show] = useState(false);
const [horizontal_menu_show, set_horizontal_menu_show] = useState(true);

return (
<>
<Aside/>

<main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
{horizontal_menu_show && <Navbar/>}
<br/>
{page}
</main>
{side_conf_show && <Side_conf/>}
</>
);
};

export default Tpl_main;