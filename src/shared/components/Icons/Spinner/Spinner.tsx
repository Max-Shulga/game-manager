import type { TIcon } from '@/shared/components/Icons/types/icon';
import styles from './Spinner.module.css';
const Spinner = ({ width = 40 }: TIcon) => {
  return (
    <span className={styles.spinnerWrapper}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200' width={width} height={width}>
        <radialGradient
          id='a5'
          cx='.66'
          fx='.66'
          cy='.3125'
          fy='.3125'
          gradientTransform='scale(1.5)'
        >
          <stop offset='0' stopColor='#F1C6FF'></stop>
          <stop offset='.3' stopColor='#F1C6FF' stopOpacity='.9'></stop>
          <stop offset='.6' stopColor='#F1C6FF' stopOpacity='.6'></stop>
          <stop offset='.8' stopColor='#F1C6FF' stopOpacity='.3'></stop>
          <stop offset='1' stopColor='#F1C6FF' stopOpacity='0'></stop>
        </radialGradient>
        <circle
          transform-origin='center'
          fill='none'
          stroke='url(#a5)'
          strokeWidth='15'
          strokeLinecap='round'
          strokeDasharray='200 1000'
          strokeDashoffset='0'
          cx='100'
          cy='100'
          r='70'
        >
          <animateTransform
            type='rotate'
            attributeName='transform'
            calcMode='spline'
            dur='2'
            values='360;0'
            keyTimes='0;1'
            keySplines='0 0 1 1'
            repeatCount='indefinite'
          ></animateTransform>
        </circle>
        <circle
          transform-origin='center'
          fill='none'
          opacity='.2'
          stroke='#F1C6FF'
          strokeWidth='15'
          strokeLinecap='round'
          cx='100'
          cy='100'
          r='70'
        ></circle>
      </svg>
    </span>
  );
};

export default Spinner;
