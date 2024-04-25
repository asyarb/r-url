/**
 * Small wrapper around the native `URL` class that works with relative URLs.
 *
 * @example #### Basic Usage:
 * ```
 * const url = new RURL('/about-us')
 * ```
 *
 * @example #### Setting search parameters:
 * ```
 * const url = new RURL('/search')
 * url.searchParams.set('query', 'scholarships')
 * url.toString() // => "/search?query=scholarships"
 * ```
 */
export class RURL extends URL {
	/* Placeholder URL to prevent the URL constructor from erroring. */
	static #FAKE_URL = "https://www.example.com"

	constructor(url: string) {
		super(url, RURL.#FAKE_URL)
	}

	host = ""
	hostname = ""
	protocol = ""
	origin = ""
	href = super.href.replace(RURL.#FAKE_URL, "")

	toString(): string {
		return super.toString().replace(RURL.#FAKE_URL, "")
	}

	toJSON(): string {
		return super.toJSON().replace(RURL.#FAKE_URL, "")
	}
}
