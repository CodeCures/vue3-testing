import { beforeEach, describe, expect, test, vi } from "vitest";
import GithubCard from '@/components/GithubCard.vue'
import { mount } from "@vue/test-utils";

describe("methods", () => {
    let wrapper;
    let vm;

    global.fetch = vi.fn();

    beforeEach(() => {
        if (wrapper) wrapper.unmount();

        wrapper = mount(GithubCard);
        vm = wrapper.vm
    })

    test("composeUrl", () => {
        expect(vm.composeUrl('123')).toBe("https://api.github.com/users/123")
        expect(vm.composeUrl('codeCures')).toBe("https://api.github.com/users/codeCures")
    });

    test("fetUser", async () => {

        const gitUser = (await import('./utils/github_user.json')).default;

        fetch.mockResolvedValue({
            json: () => gitUser
        })

        vm.composeUrl('codeCures')
        await vm.getUser()


        expect(fetch).toHaveBeenCalledWith('https://api.github.com/users/codeCures')
        expect(vm.user).toStrictEqual(gitUser)
        expect(wrapper.text()).toMatchSnapshot()
        
    })


})