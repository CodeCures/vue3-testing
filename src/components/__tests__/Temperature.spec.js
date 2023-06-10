import { mount } from "@vue/test-utils";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Temperature from '@/components/Temperature.vue'

describe("Temperature", () => {

    test("temperature component exists", () => {
        expect(Temperature).toBeTruthy();
    });

    let wrapper;
    let vm;

    beforeEach(() => {
        if (wrapper) wrapper.unmount();

        wrapper = mount(Temperature);
        vm = wrapper.vm;
    })

    test('celsius', () => {
        expect(vm.celsius).toBe(0);

        vm.degrees = 10;

        expect(vm.celsius).toBe(10);
    })

    test('fahrenheit', () => {
        expect(vm.fahrenheit).toBe(32);

        vm.degrees = 16;

        expect(vm.fahrenheit).toBe(60.8);
    })

    test('temp', async () => {
        await wrapper.setProps({ temp: '10' })

        expect(vm.degrees).toBe(10);
        expect(vm.type).toBe('celsius');

        await wrapper.setProps({ temp: '10f' })

        expect(vm.degrees).toBe(10);
        expect(vm.type).toBe('fahrenheit');
    })
})