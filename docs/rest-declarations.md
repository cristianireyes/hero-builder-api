# Types

```typescript
type ItemSubclass = string;

type ItemClass = {
  id: string;
  name: string;
  subclasses: ItemSubclass[];
};

type Item = {
  id: string;
  name: string;
  image: string;
  tier: number;
  subclass: ItemSubclass;
};

type Affinity = {
  id: string;
  name: string;
};

// Druid, Arch Druid, Ninja, Sensei, etc
// - A quien le creo la build? HeroSubclass
// -
type HeroSubclasses = {
  id: string;
  name: string;
  image: string;
  builds: Build[];
};

// Spellcaster, Rogue, Fighter
type HeroClass = {
  id: string;
  name: string;
  image: string;
  subclasses: HeroSubclasses[];
};

type Build = {
  id: string;
  subclass: HeroSubclass;
  tier: number;
  items: Item[];
};

type PreBuild = {
  shopkeeperLevel: number;
  heroLevel: number;
  heroClass: string; // id
  heroSubclass: string; // id
  heroAffinity: string;
};

// Calculamos el tier.
// Buscamos las builds del hero por su clase y subclase

//
{
  id: 222;
}
{
  id: 333;
}
```

# Endpoints

## Items

```js
// get all items
GET ${BASE_URL}/items

// get item by id
GET ${BASE_URL}/items/{id}

// create new item
POST ${BASE_URL}/items

// update item by id
PATCH ${BASE_URL}/items/{id}

// delete item by id
DELETE ${BASE_URL}/items/{id}
```

## HeroSubclass

```js
// get all builds
GET ${BASE_URL}/heroSubclass

// get build by id
GET hero-builder.com/api/heroSubclass/{id}/builds?id={id}

// create new build
POST ${BASE_URL}/heroSubclass/{'druid'}/builds
{
  build: {
    id: '1',
    items: ['id']
  }
}

// update build by id
PATCH ${BASE_URL}/heroSubclass/{'druid'}/
{
  builds: []
}

// delete build by id
DELETE ${BASE_URL}/heroSubclass/{id}
```

## Builds

```js
// get all builds
GET ${BASE_URL}/builds

// get build by id
GET ${BASE_URL}/builds/{id}

// create new build
POST ${BASE_URL}/builds

// update build by id
PATCH ${BASE_URL}/builds/{id}

// delete build by id
DELETE ${BASE_URL}/builds/{id}
```

##

{
id: string;

}
