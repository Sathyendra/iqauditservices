import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AnimatedNumber = ({ value, className }: { value: number; className: string }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <span ref={ref} className={className}>
      {inView && <CountUp end={value} duration={2} />}+
    </span>
  )
}

  export default AnimatedNumber;