import React from 'react';

import { Message } from '../../components';

import './Home.scss';

function Home() {
  return (
    <section className="home">
      <Message
        avatar="https://sun3-11.userapi.com/s/v1/ig2/X3FpFYqeN3Nidl2Fc0wqu98cTE59seOgasKZ6muon3tbaxdm3feyf6iho1-65eA6zyAt6tUGYlk9nnpnuiih5v2k.jpg?size=50x0&quality=96&crop=0,0,2156,2156&ava=1"
        text="Салам, Брут! Чё, как, уничтожил флот галлов? 🖐🏻"
        date="Sat Jan 30 2021 05:29:07"
      />
    </section>
  );
}

export default Home;
