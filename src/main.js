"use strict";

import { mount } from 'svelte';
import './base.css';
import './main.scss';
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
