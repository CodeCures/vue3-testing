import { describe, expect, test } from "vitest";
import AppHeader from "@/components/AppHeader.vue";
import { mount } from "@vue/test-utils";

describe("AppHeader", () => {
    const wrapper  = mount(AppHeader);

    test("app header component exists", () => {
        expect(wrapper.exists()).toBeTruthy()
    });

    test("if user is not logged in, do not show logout button", () => {
        expect(wrapper.find('#logout').exists()).toBeFalsy()
        expect(wrapper.text()).toBe("Login");
    });

    test("if user is logged in, do not show login button", async () => {
        await wrapper.find('#login').trigger("click");

        expect(wrapper.find('#logout').exists()).toBeTruthy()
        expect(wrapper.text()).toBe("Logout");
    });
})
