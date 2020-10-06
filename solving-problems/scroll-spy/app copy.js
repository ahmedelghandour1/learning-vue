Vue.config.productionTip = false;
let xxx;
new Vue({
  el: "#app",
  data: {
    activeId: null,
    currentPostion: null,
    direction: null,
    offset: 70,
    stepper: 100,
    items: [
      { name: "item 1", id: 1 },
      { name: "item 2", id: 2 },
      { name: "item 3", id: 3 },
      { name: "item 4", id: 4 },
      { name: "item 5", id: 5 },
      { name: "item 6", id: 6 },
      { name: "item 7", id: 7 },
    ],
    positions: [],
  },
  methods: {
    setDirection() {
      this.direction =
        this.currentPostion < window.scrollY
          ? "down"
          : this.currentPostion > window.scrollY
          ? "up"
          : null;
    }, 
    spy(e) {
      this.setDirection();
      this.currentPostion = window.scrollY;
    //   console.log(this.direction, this.currentPostion);
      this.positions = this.$refs.section.map((el) => {
        return el.getBoundingClientRect().top;
      });
      if(this.direction === 'down') {
          this.activeId = this.positions.length - 1 - [...this.positions].reverse().findIndex(el => {
              return el- this.offset <= this.currentPostion
          }) 
      }
      if(this.direction === 'up') {
        this.activeId = [...this.positions].findIndex(el => {
            return el >= this.currentPostion
        })
    }

    },
  },
  mounted() {
    console.log("MOUNTED");
    this.spy();
    window.addEventListener("scroll", this.spy);
    window.addEventListener("resize", this.spy);
  },
  watch: {
    positions() {
        console.log(this.positions.toString());
        console.log(this.currentPostion.toString());
    },
    activeId() {
        console.log(this.activeId);
    }
  },
});
