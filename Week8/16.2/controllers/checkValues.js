const instructor_ids = require("../models/instructor_id");
const course_ids = require("../models/course_id");
const course_prices = require("../models/course_price");

const error = `<img src="https://www.1and1.co.uk/digitalguide/fileadmin/DigitalGuide/Teaser/404-not-found-t.jpg">`;

module.exports = {
	check: function (ctx) {
		if (String(ctx[`request`][`url`]).includes(`/course/find_by_price/`)) {
			try {
				return ctx.render(`coupri`, course_prices);
			} catch (e) {
				ctx.status = 303;
				ctx.redirect(`/course/find_by_price/${ctx.params.price}`);
				return (ctx.body = error);
			}
		} else if (String(ctx[`request`][`url`]).includes(`/course/find_by_id/`)) {
			try {
				return ctx.render(`couid`, course_ids);
			} catch (e) {
				ctx.status = 303;
				ctx.redirect(`/course/find_by_id/${ctx.params.id}`);
				return (ctx.body = error);
			}
		} else if (
			String(ctx[`request`][`url`]).includes(`/instructor/find_by_id/`)
		) {
			try {
				return ctx.render(`insid`, instructor_ids);
			} catch (e) {
				ctx.status = 303;
				ctx.redirect(`/instructor/find_by_id/${ctx.params.id}`);
				return (ctx.body = error);
			}
		}
	}
};
