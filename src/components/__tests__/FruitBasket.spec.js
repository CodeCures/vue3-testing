import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import FruitBasket from '@/components/FruitBasket.vue'

describe('Fruitbasket', () => {
    test("can add fruit to basket from DOM", async () => {
        const wrapper = mount(FruitBasket);

        const input = wrapper.find('input');
        const button = wrapper.find('button');

        expect(wrapper.findAll('li')).toHaveLength(0);

        input.setValue('Banana')
        expect(wrapper.vm.fruit).toBe('Banana');
        await button.trigger('click');

        expect(wrapper.vm.fruit).toBe('');
        expect(wrapper.vm.basket).toEqual(expect.arrayContaining(['Banana']))
        expect(wrapper.findAll('li')).toHaveLength(1)
    })
})