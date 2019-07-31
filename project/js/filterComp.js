let product = {
    props: [],
    template: `
        <form action="#" class="search-form" @submit.prevent="filter">
            <input type="text" class="search-field" v-model="userSearch">
            <button class="btn-search" type="submit">
                <i class="fas fa-search"></i>
            </button>
        </form>
    `,
    data ()  {
        return {
            userSearch: '',
        }
    },
    methods: {
        filter () {
			let regExp = new RegExp (this.userSearch, 'i')
			this.filtered = this.products.filter (el => regExp.test (el.product_name))
		}
    },
    mounted () {
		this.getJSON(`${API_URL + this.catalogUrl}`)
			.then (data => {
				for (let el of data) {
					this.products.push (el)
					this.filtered.push (el)
				}
			})
	}
}