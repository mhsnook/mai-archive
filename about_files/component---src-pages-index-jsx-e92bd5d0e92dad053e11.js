;(self.webpackChunkmutual_aid_listing =
	self.webpackChunkmutual_aid_listing || []).push([
	[230],
	{
		3914: function (e, t, a) {
			'use strict'
			a.d(t, {
				A: function () {
					return m
				},
			})
			var n = a(7294),
				l = a(9754),
				r = a(2200),
				i = function (e) {
					var t = e.children
					return n.createElement(
						'div',
						{ className: 'bg-gray-100' },
						t,
						n.createElement(
							'div',
							{
								className:
									'bg-white border-t border-b border-transparent pt-8 bp-4 lg:py-16 mt-8',
							},
							n.createElement(
								'div',
								{ className: 'container' },
								n.createElement(r.Cd, null)
							)
						),
						n.createElement(r.$_, null)
					)
				},
				s = a(5444),
				c = a(3201),
				o = function (e) {
					var t = e.children,
						a = e.closeTo,
						r = e.navigation,
						i = void 0 === r ? {} : r,
						o = i.current,
						m = void 0 === o ? -1 : o,
						d = i.items,
						u = void 0 === d ? [] : d,
						g = u[m - 1] ? u[m - 1] : null,
						p = u[m + 1] ? u[m + 1] : null,
						f = function () {
							;(0, s.navigate)(a, { state: { noScroll: !0 } })
						},
						h = function (e) {
							switch (e.keyCode) {
								case 37:
									g &&
										(0, s.navigate)(g, {
											state: {
												navigation: { current: m - 1, items: u },
												modal: !0,
											},
										})
									break
								case 39:
									p &&
										(0, s.navigate)(p, {
											state: {
												navigation: { current: m + 1, items: u },
												modal: !0,
											},
										})
									break
								case 27:
									f()
							}
						}
					return (
						(0, n.useEffect)(function () {
							return (
								window.addEventListener('keydown', h),
								function () {
									window.removeEventListener('keydown', h)
								}
							)
						}),
						n.createElement(
							'div',
							{ className: 'flex relative h-screen' },
							n.createElement(
								'div',
								{
									className:
										'flex flex-wrap items-end md:items-center justify-center mx-auto w-full max-w-screen-xl',
								},
								n.createElement(
									'div',
									{ className: 'order-3 md:order-first pb-2 w-8 mx-2 md:mx-4' },
									g &&
										n.createElement(
											l.rU,
											{
												asModal: !0,
												className:
													'inline-block w-10 h-10 px-2 text-white hover:text-primary-400',
												state: { navigation: { current: m - 1, items: u } },
												to: g,
											},
											n.createElement(c._HU, {
												className:
													'w-full h-full fill-current transition-colors duration-200',
											})
										)
								),
								n.createElement(
									'div',
									{
										className:
											'w-full mt-12 md:mt-0 mx-3 md:mx-0 md:flex-1 bg-white dark:bg-gray-900 shadow-lg rounded-md overflow-hidden',
									},
									t
								),
								n.createElement(
									'div',
									{ className: 'order-last pb-2 w-8 mx-2 md:mx-4' },
									p &&
										n.createElement(
											l.rU,
											{
												asModal: !0,
												className:
													'inline-block w-10 h-10 px-2 text-white hover:text-primary-400',
												state: { navigation: { current: m + 1, items: u } },
												to: p,
											},
											n.createElement(c.H_v, {
												className:
													'w-full h-full fill-current transition-colors duration-200',
											})
										)
								)
							),
							n.createElement(
								'button',
								{
									className:
										'absolute top-0 right-0 m-3 lg:m-6 focus:outline-none',
									onClick: f,
								},
								n.createElement(c.aHS, {
									className:
										'w-8 h-8 fill-current text-white hover:text-primary-400 transition-colors duration-200',
								})
							)
						)
					)
				},
				m = function (e) {
					var t = e.children,
						a = e.navigation
					return n.createElement(l.QQ.Consumer, null, function (e) {
						var l = e.modal,
							r = e.closeTo
						return l ?
								n.createElement(o, { closeTo: r, navigation: a }, t)
							:	n.createElement(i, null, t)
					})
				}
		},
		4199: function (e, t, a) {
			'use strict'
			a.r(t)
			var n = a(7294),
				l = a(2200),
				r = a(3914),
				i = a(9754)
			t.default = function (e) {
				var t = e.data,
					a = (0, n.useState)(!1),
					s = a[0],
					c = a[1],
					o = t.options.siteMetadata,
					m = o.show_mixtape_1,
					d = o.show_zine,
					u = o.show_mixtape_2,
					g = {},
					p = {},
					f = {},
					h = {},
					v = []
				return (
					t.items.nodes.forEach(function (e) {
						if (!0 === e.data.Foreign_Funds || !1 === s) {
							var t = e.data,
								a = t.Category,
								n = t.Category_Rank
							;((h[n] = a),
								(g[a] = g[a] || []),
								(p[a] = p[a] || []),
								(f[a] = f[a] || []),
								!0 === e.data.Urgent ? (v.push(e), g[a].push(e))
								: 'Met Goal and Increased' === e.data.Status ? f[a].push(e)
								: p[a].push(e))
						}
					}),
					v.sort(function () {
						return Math.random() - 0.5
					}),
					v.length > 6 && (v.length = 6),
					n.createElement(
						r.A,
						null,
						n.createElement(l.$t, {
							title: 'MutualAidIndia.com | Home',
							description:
								'A curated list of opportunities to donate for COVID relief.',
							image: t.hero.url,
						}),
						n.createElement('hr', { className: 'my-8 invisible lg:hidden' }),
						n.createElement(l.VM, {
							image: t.hero,
							tag: 'fundraisers',
							title: 'Mutual Aid India',
							description:
								'A curated list of opportunities to donate for COVID relief.',
						}),
						u && n.createElement(l.Oj, null),
						d && n.createElement(l.C4, null),
						m && n.createElement(l.jk, null),
						n.createElement(l._H, null),
						n.createElement(
							'div',
							{ className: 'lg:container grid grid-cols-4' },
							n.createElement(
								'div',
								{ className: 'col-span-4 lg:col-span-1 lg:pb-8 py-4' },
								n.createElement(l.JL, {
									categories: h,
									isToggled: s,
									setToggled: c,
								})
							),
							n.createElement(
								'div',
								{
									className:
										'lg:col-start-2 col-span-4 px-1 sm:px-3 md:px-7 lg:px-8 ml-0',
								},
								n.createElement(
									'div',
									{ className: 'py-6' },
									n.createElement(
										'h1',
										{
											className:
												'text-2xl font-bold leading-tight text-black my-3 px-4',
										},
										'Highlighted Campaigns'
									),
									n.createElement(
										'div',
										{ className: 'grid md:grid-cols-2 gap-4 ' },
										v.map(function (e, t) {
											return n.createElement(
												i.rU,
												{
													to: '/' + e.data.Slug,
													className:
														'hover:bg-primary-600 hover:text-white bg-white relative rounded-md shadow-md px-5 py-4 cursor-pointer flex focus:outline-none',
													state: {
														current: t,
														items: v.map(function (e) {
															return '/' + e.data.Slug
														}),
													},
													asModal: !0,
												},
												n.createElement(
													'div',
													{ class: 'flex items-center justify-between w-full' },
													n.createElement(
														'div',
														{ class: 'flex items-center' },
														n.createElement(
															'div',
															{ class: 'text-md' },
															n.createElement(
																'p',
																{ class: 'font-medium' },
																e.data.Name
															),
															n.createElement(
																'span',
																{ class: 'inline' },
																e.data.Region
															)
														)
													),
													n.createElement('div', { class: 'flex-shrink-0' })
												)
											)
										})
									)
								),
								Object.keys(h).map(function (e, t) {
									return n.createElement(
										'div',
										{
											className:
												'mb-10 py-8 md:py-10 lg:py-12 px-4 md:px-8 lg:px-10 bg-white shadow-md rounded-md',
											id: 'category_' + e,
										},
										n.createElement(
											'h4',
											{
												className:
													'text-primary-800 uppercase text-sm tracking-wide font-medium pb-px',
											},
											'Category'
										),
										n.createElement(
											'h2',
											{
												className:
													'text-2xl lg:text-4xl font-bold leading-tight text-black',
												key: t,
											},
											h[e]
										),
										n.createElement(l.ty, {
											nodes: g[h[e]].concat(p[h[e]], f[h[e]]),
											isForeignDonor: s,
										})
									)
								})
							)
						)
					)
				)
			}
		},
	},
])
//# sourceMappingURL=component---src-pages-index-jsx-e92bd5d0e92dad053e11.js.map
