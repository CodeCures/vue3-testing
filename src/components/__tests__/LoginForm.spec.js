import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import LoginForm from '@/components/LoginForm.vue'

describe('LoginForm', () => {
    it("emits an event with user payload", () => {
        const wrapper = mount(LoginForm);
        const input = wrapper.find('input[type="text"]');

        input.setValue("Courage Francis")
        wrapper.trigger('submit');
        const formEmittedCalls = wrapper.emitted('submit');

        expect(formEmittedCalls).toHaveLength(1);
        expect(formEmittedCalls[0][0]).toMatchObject({ name: 'Courage Francis' })
    })
})