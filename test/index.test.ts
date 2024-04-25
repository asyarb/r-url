import { assert, expect, it } from "vitest"
import { RURL } from "../src"

it("does not error when given a non URI.", () => {
	assert.doesNotThrow(() => new RURL("/search"))
})

it("works with search parameters", () => {
	const url = new RURL("/search")
	url.searchParams.set("query", "about us")

	expect(url.toString()).toBe("/search?query=about+us")
})

it("does not expose hostname information", () => {
	const url = new RURL("/search")

	expect(url.host).toBe("")
	expect(url.hostname).toBe("")
	expect(url.protocol).toBe("")
	expect(url.origin).toBe("")

	expect(url.href).toBe("/search")

	expect(url.toString()).toBe("/search")
	expect(url.toJSON()).toBe("/search")
})
