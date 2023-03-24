import React from 'react';
import { indexList } from '../datas/indexList';
import { useState } from 'react';
import SimpleText from './SimpleText';
import Text from './Text';
import '../sass/pages/_mainIndex.scss';



const MainIndex = () => {
    const [ indexlist, setIndexList ] = useState(indexList)
    const firstArrayImages = indexlist.slice(0, 6)
    const secondArrayImages = indexlist.slice(6, 12)
    return (
        <div className='main-parent'>
            <div className='first__array'>
                {firstArrayImages.map(({ id, name, image, alt, comment, index}) => (
                    <article className='childs' key={`${id}-${index}`} >
                        <img src={image} alt={alt} />
                        <div className="childs--text">
                            <p>{comment}</p>
                            <span className='span-text'>{name}</span>
                        </div>
                    </article>
                ))}
            </div>
            <section>
                <SimpleText />
            </section>
            <Text title={""} comment={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quos deserunt est natus nostrum totam ad! Iusto id commodi ipsa deleniti maxime, nobis recusandae debitis optio ducimus eveniet magni dolorum laboriosam, ab assumenda sit repudiandae ad ratione, officia molestiae itaque enim saepe. Temporibus animi aliquid similique error a et, dignissimos officia nihil ut, consequuntur quidem, doloribus facere cumque molestias nisi architecto nobis ex nesciunt quisquam maxime libero quia ab incidunt nostrum. Modi, veniam et autem enim vel temporibus blanditiis, deserunt ab dolorem accusantium tempora quis, dicta nam deleniti praesentium placeat? Commodi quos excepturi distinctio aliquid natus perferendis fugiat numquam, molestias cum incidunt exercitationem pariatur dolores atque quibusdam mollitia magnam facilis! Natus temporibus illum dignissimos consequuntur iste dicta veritatis fugiat sapiente odio error, in suscipit libero sit quos a ipsam doloribus tempore quisquam vel nemo! Dolorem quidem, dignissimos cupiditate reiciendis facere aperiam beatae deserunt possimus. Aliquid nemo officia itaque eius cum perspiciatis perferendis reiciendis beatae quis alias architecto incidunt blanditiis voluptates, ipsa odio aliquam libero a, impedit numquam exercitationem rem laudantium dolorum, culpa dicta? Dolorem ut totam consequuntur necessitatibus autem facere officiis minima ex sit praesentium velit eius, voluptatem voluptas eos eum? Eligendi consequatur est consectetur recusandae fugit totam dolores cumque nemo, corporis molestias repellat sequi quidem minima modi quasi, sunt sapiente ullam, dolorem enim assumenda dicta inventore. Quae doloribus eveniet rerum commodi quia, minima beatae deserunt aperiam nulla facilis nobis ea consequuntur deleniti saepe sapiente asperiores vero consequatur ab provident! Amet tempora dignissimos atque consectetur tenetur voluptatum alias voluptate praesentium similique, ipsam nesciunt aspernatur commodi dolorum iste ipsa repudiandae, reprehenderit aperiam eius accusamus dolor. Sed sit molestias consequuntur amet animi asperiores perspiciatis maiores, similique ab ipsum iste eaque rerum doloremque incidunt sapiente omnis. Ipsa ipsum ducimus rerum iure deserunt doloremque saepe harum illo natus, neque corporis quam repellat rem reprehenderit nostrum vitae fugit nihil dolorem magni eligendi qui perferendis? Quibusdam quos pariatur dolor incidunt saepe id alias, eum a voluptates labore, voluptas ea dicta aspernatur quaerat possimus necessitatibus doloremque eaque vero dolore aut sint libero enim. Iure, sit repellendus! Sunt nostrum veniam officia voluptas consectetur explicabo numquam natus dolorum! Tempora deserunt minus numquam eos in dolorum dolore sed quas? Inventore ullam pariatur quis, ipsum omnis nostrum! Dignissimos ea id voluptatem ad temporibus non quam quos corrupti tenetur incidunt itaque nulla reprehenderit, placeat porro exercitationem et, asperiores, expedita laboriosam odit. Totam veniam dolor nostrum blanditiis atque quasi id deleniti dolores voluptas!'} />
            <div className='second__array'>
                {secondArrayImages.map(({ id, name, image, alt, comment, index}) => (
                    <article className='childs' key={`${id}-${index}`} >
                        <img src={image} alt={alt} />
                        <div className="childs--text">
                            <p>{comment}</p>
                            <span className='span-text'>{name}</span>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default MainIndex;