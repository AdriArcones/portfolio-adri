
import './Timeline.scss'
import CustomSection from '../../shared/components/custom-section/CustomSection'
import  CustomTimeline  from './CustomTimeline'


const timelineData = [
  {
    title: "2021",
    content: 
    <div>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias architecto aut et mollitia consectetur reiciendis dolorem delectus! Aliquam provident rem a ea? Quod praesentium nobis molestias aliquid est? Itaque, ipsa.
      Harum excepturi nemo nam provident quod consectetur, ullam minus, similique adipisci magnam, officia ratione repudiandae dicta. Molestiae placeat fuga animi modi soluta qui cum sed quasi, consequuntur sequi fugiat quae.
      Rem, nisi cumque sunt corrupti eligendi non aliquam vel quos ullam, ratione vitae perferendis molestias hic beatae optio odio labore, ipsum qui magni quidem ex? Sequi minima culpa nemo reprehenderit!
      Saepe ex modi reiciendis mollitia molestiae, explicabo aspernatur vel accusamus? Unde placeat distinctio vel nulla necessitatibus iusto, facere animi fugiat impedit enim magnam rerum ducimus doloribus numquam fuga illo dolores?
      Deleniti iusto asperiores nemo a saepe quasi numquam esse, facilis obcaecati! Autem molestiae blanditiis aliquid consectetur, eos consequatur. Rem ducimus modi delectus nulla laudantium? Non in qui aliquid rerum harum.
      Reprehenderit magnam dicta quas ipsa recusandae accusamus a, atque sapiente deserunt quia deleniti debitis ab rem voluptatum provident tenetur suscipit. Mollitia in perferendis aspernatur ipsam enim. Voluptate quaerat sapiente ducimus?
      Molestias fuga accusantium unde perspiciatis maxime ipsum ab rem nam quaerat mollitia sed officiis delectus tenetur nostrum soluta et, explicabo, corporis voluptas incidunt temporibus architecto. Itaque deleniti fugiat numquam unde.
      Expedita consectetur tempora reprehenderit a rem pariatur fugiat consequuntur culpa illo velit ipsa tempore delectus temporibus hic, voluptate ab vel nisi! Dolor mollitia eum laboriosam inventore at accusamus, illo nobis!
      Officiis eum explicabo laborum minus ipsam nobis veniam possimus maiores fuga, fugiat sed reiciendis nam optio! Tempore, accusamus laboriosam ipsa vitae, sunt vel laudantium aliquam in veniam hic numquam dolores?
      Eos harum ipsam soluta consectetur eaque qui molestias, explicabo mollitia perferendis sunt maiores quis ducimus veniam, aspernatur numquam ex error a amet iste ipsum. Odio nobis minus qui tenetur veritatis?
      Magnam similique necessitatibus laboriosam quibusdam sint nesciunt consectetur ex eius quod vitae ab nisi libero quae assumenda laudantium nostrum nam vero tenetur optio, distinctio numquam voluptas perferendis. Est, aliquam repellendus?
      Ad aspernatur deserunt nulla pariatur porro, ducimus doloremque! Laboriosam, temporibus aspernatur excepturi delectus consectetur recusandae. In illo asperiores similique veritatis nihil quo aperiam, ab at fugit sapiente ex commodi assumenda?
      Aut non asperiores aperiam esse sequi iusto, corrupti ipsa laborum? Debitis suscipit est voluptates optio omnis tempore modi quisquam nam voluptatem, itaque numquam hic odit deleniti sed accusamus impedit reprehenderit.
      Porro velit earum dolor adipisci corporis hic natus architecto, aut sapiente corrupti perferendis ex incidunt doloremque officia aliquam eveniet ut nobis. Impedit odio distinctio optio aut quo eos cupiditate quisquam.
      Cum explicabo iste dicta vel voluptatibus amet placeat nulla. Sed, hic et nesciunt repellendus tempore deleniti eveniet impedit voluptatibus tempora ad voluptates ipsa nam iste minima aliquid quia eos expedita?
      Natus corporis impedit accusamus ullam recusandae vero voluptatum ut, rem quia assumenda atque tempore eius incidunt tenetur labore repudiandae nulla voluptatem facilis at. Consequuntur repellat molestias accusantium dolor fugiat exercitationem?
      Repudiandae odio, eligendi officiis veniam id earum vero. Iusto aperiam in corporis veniam amet quasi! Ducimus dolorum aliquid corrupti iure facilis sunt! Molestias laudantium eligendi praesentium consequatur expedita maxime dolorem!
      Quidem placeat, rem temporibus enim eligendi voluptate id voluptas? Quasi sed, sint, numquam aspernatur, qui hic quos fugit nobis eum magni dicta. Architecto, distinctio. Quod harum autem dolore pariatur delectus.
      Mollitia illo iure inventore porro! Aliquid nostrum ab commodi! Sed delectus nostrum recusandae cumque, totam qui asperiores magnam quis accusantium explicabo voluptates, neque vitae provident commodi, possimus perferendis incidunt dolore?
      Sint blanditiis ipsa reiciendis vero iusto nulla maiores nemo! Tenetur optio itaque illum ratione quod dolores sit quis iste, pariatur harum maxime ea? Laboriosam id ipsa eius culpa, praesentium soluta.</p>
    </div>
  },
  {
    title: "2022",
    content: <div>Inicio de mi carrera...</div>
  },
  {
    title: "2023",
    content: <div>Mi primer proyecto...</div>
  },
  {
    title: "2024", 
    content: <div>Grandes avances...</div>
  },
];


export const Timeline = () => {
  return (
    <CustomSection
      title="Timeline"
      subtitle="Desarrollador Full Stack"
      id="timeline"
      className="timeline__section"
    >
      <CustomTimeline data={timelineData} />
    </CustomSection>
  )
} 