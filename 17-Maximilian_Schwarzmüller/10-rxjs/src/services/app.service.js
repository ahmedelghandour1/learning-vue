import { Subject } from "rxjs";
import { map } from 'rxjs/operators'


export default {
    onClick$: (new Subject).pipe(
        map((msg) => msg.split(''))
    ),
    dumy: 'hi'

}