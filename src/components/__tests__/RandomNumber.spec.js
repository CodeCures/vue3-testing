import { beforeEach, describe, expect, test } from "vitest";
import RandomNumber from "@/components/RandomNumber.vue";
import { mount } from "@vue/test-utils";
describe('RandomNumber', () => {

    let wrapper;

    beforeEach(() => {
        if (wrapper) wrapper.unmount()

        wrapper = mount(RandomNumber);
    })

    test("by default random value should be 0", () => {
        expect(wrapper.html()).toContain('<div>0</div>')
    })

    test("random number should between 1 and 10 when generate is clicked", async () => {
        await wrapper.find('button').trigger('click');
        const randomNumber = parseInt(wrapper.find('div').text());

        expect(randomNumber).toBeGreaterThanOrEqual(1);
        expect(randomNumber).toBeLessThanOrEqual(10);
    })

    test("should be between 200 and 300 when generated", async () => {
        await wrapper.setProps({ min: 200, max: 300 });
        await wrapper.find('button').trigger('click');
        
        const randomNumber = parseInt(wrapper.find('div').text());

        expect(randomNumber).toBeGreaterThanOrEqual(200);
        expect(randomNumber).toBeLessThanOrEqual(300);
    })
})