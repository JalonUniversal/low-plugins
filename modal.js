import modalVm from './modal.vue';
import Vue from 'vue';
const modalProto = Vue.extend(modalVm);

let instance;

const defaultOption = {
  title: 'Tips',
  content: 'content',
  sureButton: 'ok'
}

const modal = (option, callback) => {
  instance = new modalProto({
    el: document.createElement('div'),
    data() {
      return Object.assign({}, defaultOption, option);
    }
  });
  document.body.appendChild(instance.$el);
  instance.callback = callback;
}

export default modal;

