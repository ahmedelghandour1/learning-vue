<template>
  <div id="app">
    <v-button>CLICK</v-button>
    <div>
      {{msg}}
    </div>
  </div>
</template>

<script>
import {vButton} from './components'; 
import {appService} from './services';
// import { switchMap } from 'rxjs/operators';
// import { of } from 'rxjs';
export default {
  name: 'App',
  subscriptions() {
    return {
      msg: appService.onClick$//.pipe(switchMap(() => of('hey pape')))
    }
  },
  components: {
    vButton
  },
  created() {
    appService.dumy = 'hiiiiiiiiiiiiiii';
    console.log(appService.dumy);
    appService.onClick$.subscribe((v) => {
      console.log(v)
    })
  }

}
</script>

<style>

</style>
