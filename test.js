import test from 'ava'
import starNames from '.'

test('main', t => {
  t.true(starNames.all.length > 0)
  t.truthy(starNames.random())
  t.not(starNames.random(), starNames.random())
  t.is(starNames.all[0], 'Achernar')
  t.is(starNames.all[1], 'Acrux')
})
