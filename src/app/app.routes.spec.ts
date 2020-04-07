import { routes } from './app.routes';
import { UsersComponent } from './part2/users/users.component';

describe('routes', () => {
  it('should contain a route for /users', () => {
    expect(routes).toContain({path: 'users', component: UsersComponent});
  })
})