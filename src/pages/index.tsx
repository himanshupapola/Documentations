import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace('/aws/What-is-Cloud-Computing/Cloud-Computing-Intro');
  }, [history]);

  return null;
}
