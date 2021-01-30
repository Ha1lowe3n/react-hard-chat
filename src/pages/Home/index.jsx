import React from 'react';

import { Message } from '../../components';

import './Home.scss';

function Home() {
  const date = new Date(2020, 11, 5);

  return (
    <section className="home">
      <Message
        avatar="https://sun3-11.userapi.com/s/v1/ig2/X3FpFYqeN3Nidl2Fc0wqu98cTE59seOgasKZ6muon3tbaxdm3feyf6iho1-65eA6zyAt6tUGYlk9nnpnuiih5v2k.jpg?size=50x0&quality=96&crop=0,0,2156,2156&ava=1"
        text="Мы 🌝"
        date={date}
      />
      <Message
        avatar="https://sun3-11.userapi.com/s/v1/ig2/X3FpFYqeN3Nidl2Fc0wqu98cTE59seOgasKZ6muon3tbaxdm3feyf6iho1-65eA6zyAt6tUGYlk9nnpnuiih5v2k.jpg?size=50x0&quality=96&crop=0,0,2156,2156&ava=1"
        text="Мы тут недавно войска Ариовистаразбили,чувакихотелизакрепитьсянагалльскихземлях,лол🌝"
        date={date}
      />
    </section>
  );
}

export default Home;
