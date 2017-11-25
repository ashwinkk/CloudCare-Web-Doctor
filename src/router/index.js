import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import patient from "./patient";
import doctor from "./doctor";

export default new Router({
	routes: [...patient, ...doctor]
});
