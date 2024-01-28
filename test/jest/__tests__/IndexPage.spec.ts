// IndexPage.spec.js
import IndexPage from 'src/pages/IndexPage.vue';
import { shallowMount } from '@vue/test-utils';

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(IndexPage);
    const header = wrapper.find('.htmlClass h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Vue is awesome.');
  });
  it('check text content to be as defined in variable', () => {
    const wrapper = shallowMount(HtmlComponent, {
      data() {
        return {
          title: 'I love Vue.',
        };
      },
    });
    const header = wrapper.find('.htmlClass h1');
    expect(header.text()).toBe('I love Vue.');
  });
});
