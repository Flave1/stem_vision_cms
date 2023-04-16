
import AOS from 'aos';
import 'aos/dist/aos.css';

export class aos {
    static animate() {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }
}