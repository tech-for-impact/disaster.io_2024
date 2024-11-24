import { Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import logoImage from '../../resource/logo.png';

const H1Start: Component = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/host/roombuild');
  };

  return (
    <div class="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-sans">
      <div class="text-center">
      <div class="mx-auto flex flex-col items-center">
          <img
            src={logoImage}
            alt="Disaster.io Logo"
            class="h-36 w-auto mb-2"
          />
        </div>
        <div class="text-neutral-200 text-xl mt-2.5 mb-8">
          한국형 생존 대비 시뮬레이션
        </div>
        <button
          onClick={handleNext}
          class="bg-orange-500 text-black px-5 py-1.5 rounded text-lg cursor-pointer hover:bg-orange-600 transition-colors"
        >
          -&gt;
        </button>
      </div>
    </div>
  );
};

export default H1Start;