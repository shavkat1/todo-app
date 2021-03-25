import './about-page.css'

import Slider from "react-slick"
import poster1 from '../../images/1.png'
import poster2 from '../../images/2.png'
import poster3 from '../../images/3.png'
import poster4 from '../../images/4.png'
import poster5 from '../../images/5.png'

function AboutPage() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    };

    return (
        <div className="container">

            <div className="about-content">
                <h1>About Page</h1>
                <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Букв по всей вопроса запятой встретил своих послушавшись предупреждал власти меня силуэт, переписывается семантика выйти скатился взгляд заманивший пояс, буквоград языком.</p>
                <p>Далеко-далеко за словесными горами в стране гласных, и согласных живут рыбные тексты. Образ, все города. Точках, меня предупреждал. Сих обеспечивает моей снова ручеек путь о заголовок точках деревни предупреждал рот! Вскоре, пор.</p>

                <Slider {...settings}>
                    <div>
                        <img src={poster1} alt="" />
                    </div>
                    <div>
                        <img src={poster2} alt="" />
                    </div>
                    <div>
                        <img src={poster3} alt="" />
                    </div>
                    <div>
                        <img src={poster4} alt="" />
                    </div>
                    <div>
                        <img src={poster5} alt="" />
                    </div>
                </Slider>

            </div>
        </div>
    )
}

export default AboutPage