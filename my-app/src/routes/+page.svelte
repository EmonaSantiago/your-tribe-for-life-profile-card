<script>

  import { dataset_dev } from "svelte/internal";
  import "../styles/global.css"
  const imgUrl = new URL('', import.meta.url).href
  
</script>

<section class="Profile-Card">
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <h2>Emona Santiago</h2>
                <img class="profile-picture" src="{imgUrl}" alt="afbeelding van emona">
            </div>
            <div class="flip-card-back">
              <h1>Emona Santiago</h1> 
              <p>Github Link</p> 
              <p>Bio</p>
              <p>2de jaars FDND</p>
              <p>Mijn naam is Emona en ik ben 18 jaar oud. Ik ben Filipijnse afkomst en woon in Amsterdam.</p>
              <p></p>
            </div>
          </div>
    </div>
</section>