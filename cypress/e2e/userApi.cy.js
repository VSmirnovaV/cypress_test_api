describe('user test api', () => {
	it('add user', () => {
		cy.query('POST', '/user', 123, "vssmirnova", "Viktoria", "Smirnova", "vs96@mail.ru", "pass", "+79115645897", 0).then((response) => {
			expect(response.status).be.eq(200);
			expect(response.body).be.eql({
				code: 200,
				type: "unknown",
				message: "123"
			})
			cy.request('GET', '/user/vssmirnova').then((response) => {
				expect(response.status).be.eq(200);
				expect(response.body).be.eql({
					id: 123,
					username: "vssmirnova",
					firstName: "Viktoria",
					lastName: "Smirnova",
					email: "vs96@mail.ru",
					password: "pass",
					phone: "+79115645897",
					userStatus: 0
				})
			})
		})
	}),

	it('update user', () => {
		cy.query('POST', '/user', 123, "vssmirnova", "Viktoria", "Smirnova", "vs96@mail.ru", "pass", "+79115645897", 0).then((response) => {
			expect(response.status).be.eq(200);
			cy.query('PUT', '/user/vssmirnova', 123, "vssmirnova", "Vika", "Smirnova", "vs96@bk.ru", "pass123", "+79118888888", 0).then((response) => {
				expect(response.status).be.eq(200)
				expect(response.body).be.eql({
					code: 200,
					type: "unknown",
					message: "123"
				})
				cy.request('GET', '/user/vssmirnova').then((response) => {
					expect(response.status).be.eq(200);
					expect(response.body).be.eql({
						id: 123,
						username: "vssmirnova",
						firstName: "Vika",
						lastName: "Smirnova",
						email: "vs96@bk.ru",
						password: "pass123",
						phone: "+79118888888",
						userStatus: 0
					})
				})
			})
		})
	}),

	it('delete user', () => {
		cy.query('POST', '/user', 123, "vssmirnova", "Viktoria", "Smirnova", "vs96@mail.ru", "pass", "+79115645897", 0);
		cy.request('DELETE', '/user/vssmirnova').then((response) => {
			expect(response.status).be.eq(200);
			expect(response.body).be.eql({
				code: 200,
				message: "vssmirnova",
				type: "unknown"
			})
		})
	})
})
