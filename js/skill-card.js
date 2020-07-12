Vue.component('pz-skill-card', {
	template: `
			<div class="skill-card">
				<div class="skill-card-title">
					<img :src="imgSrc" alt="">
					<h4>{{ name }}</h4>
				</div>
			</div>`,
	props: ['name', 'imgSrc'],
});
