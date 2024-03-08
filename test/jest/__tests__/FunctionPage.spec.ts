import { describe, expect, it } from '@jest/globals';
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-jest';
import { shallowMount } from '@vue/test-utils';
import FunctionPage from 'src/pages/FunctionPage.vue';
import { shallowMount } from '@vue/test-utils';

// Specify here Quasar config you'll need to test your component
installQuasarPlugin();

describe('IndexPage', () => {
  it('should render correct contents', () => {
    const wrapper = shallowMount(FunctionPage);
    const header = wrapper.find('.htmlClass h1');
    expect(header.exists()).toBe(true);
    expect(header.text()).toBe('Vue is awesome.');
  });
});

it('check text content to be as defined in variable', () => {
  const wrapper = shallowMount(FunctionPage, {
    data() {
      return {
        title: 'I love Vue.',
      };
    },
  });
  const header = wrapper.find('.htmlClass h1');
  expect(header.text()).toBe('I love Vue.');
});

test('should show the form element on the user output', () => {
  const wrapper = shallowMount(FunctionPage);
  expect(wrapper.find('form').exists()).toBe(true);
});

test('should contain input fields in template', () => {
  const wrapper = shallowMount(FunctionPage);
  expect(wrapper.find('form > input').exists()).toBe(true);
});

test('should have button', () => {
  const wrapper = shallowMount(FunctionPage);
  expect(wrapper.find('button').exists()).toBe(true);
});

// create test for the function addname
test('trigger click event on button name and code', async () => {
  // เทสข้อมูลชื่อ และ เลขนศ
  const wrapper = shallowMount(FunctionPage);

  // ค้นหาปุ่มที่มี id="name-combined-action" ที่จะรอฟังเหตุการณ์ (event) การเรียกใช้ฟังก์ชัน "addname"
  const button = wrapper.find('button#name-combined-action');

  // set data ที่ไว้ใช้เทสใน input fields
  await wrapper.setData({
        firstName: 'Traiphakh',
        lastName: 'Sittikaew',
        stuId: '6404101318'
  });

  // ทำ Object Destructure
  const {firstName, lastName, stuId} = wrapper.vm

  await button.trigger('click');

  expect(firstName).toBe('Traiphakh');
  expect(lastName).toBe('Sittikaew');
  expect(stuId).toBe('6404101318');

  expect(wrapper.vm.addname(firstName, lastName, stuId)).toBe(
    'Traiphakh Sittikaew 6404101318'
  );
});
