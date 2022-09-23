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
                <img class="profile-picture" src="./images/profiel.jpg" alt="afbeelding van emona">
                <p>Flip to know me!</p>
            </div>
            <div class="flip-card-back">
              <h1>Emona Santiago</h1> 
              <a href="https://github.com/EmonaSantiago/your-tribe-for-life-profile-card">Github link!</a> 
              <p>Bio</p>
              <p>2de jaars FDND</p>
              <p></p>
              <p></p>
            </div>
          </div>
    </div>
</section>