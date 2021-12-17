import { initStore } from 'hooks/use-store';
import { TSoundbank } from 'data/soundbank-data';

const configureStore = ( state: TSoundbank ) => {
    /* TODO
      Change Keys
      Change Sounds
      Record Clips etc.
    */
    const actions = {};
    initStore('soundbank', actions, state );
};

export default configureStore;