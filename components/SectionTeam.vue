<template>
  <div class="hero" :class="$style.teamSection">
    <div class="container is-max-desktop">
      <h1 :class="$style.ourTeam">Our Team</h1>
      <div
        :class="$style.teamContainer"
        v-for="(chunk, i) in member_chunks"
        :key="i"
      >
        <ItemTeamMember
          v-for="member in chunk"
          :key="member.name"
          :filename="member.filename"
          :name="member.name"
          :role="member.role"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ItemTeamMember from '@/components/ItemTeamMember.vue'

export default {
  components: {
    ItemTeamMember,
  },
  data() {
    return {
      members: [
        {
          name: 'Anbika Giri',
          filename: 'anbika.jpg',
          role: 'Content',
        },
        {
          name: 'Anushri Lama',
          filename: 'anushri.jpg',
          role: 'Illustrator',
        },
        {
          name: 'Babin Nepali',
          filename: 'babin.jpg',
          role: 'Software Intern',
        },
        {
          name: 'Dovan Rai',
          filename: 'dovan.jpg',
          role: 'Project Manager',
        },
        {
          name: 'Rushil Shakya',
          filename: 'rushil.jpg',
          role: 'System Architect',
        },
        {
          name: 'Sandeep Sthapit',
          filename: 'sandeep.jpg',
          role: 'Lead Developer',
        },
        {
          name: 'Shrijit Rajbhandari',
          filename: 'shrijit.jpg',
          role: 'Animator',
        },
        {
          name: 'Uttam Babu Shrestha',
          filename: 'uttam.jpg',
          role: 'Domain Expert',
        },
      ],
    }
  },
  computed: {
    member_chunks() {
      const no_in_row = 4
      return this.members.reduce((all, one, i) => {
        const ch = Math.floor(i / no_in_row)
        all[ch] = [].concat(all[ch] || [], one)
        return all
      }, [])
    },
  },
}
</script>

<style module>
.teamSection {
  display: flex;
  justify-content: center;
}
.teamSection>.container {
    width: 100%;
}
.ourTeam{
    font-size: 2.5rem;
    margin: 1rem;
    margin-bottom: 2rem;
    text-align: center;
}
.teamContainer {
  display: flex;
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
