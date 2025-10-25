import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-cormorant font-bold text-primary">Искусство Флористики</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'styles', label: 'Стили' },
                { id: 'encyclopedia', label: 'Энциклопедия' },
                { id: 'care', label: 'Уход' },
                { id: 'tools', label: 'Инструменты' },
                { id: 'contact', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-cormorant font-bold text-foreground mb-6">
                Мир цветов и искусства
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Откройте для себя волшебный мир флористики — от классических композиций до современных трендов. 
                Узнайте о разных стилях, уходе за растениями и создании неповторимых букетов.
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('styles')} className="bg-primary hover:bg-primary/90">
                  Изучить стили
                </Button>
                <Button onClick={() => scrollToSection('encyclopedia')} variant="outline">
                  Энциклопедия цветов
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
                alt="Букет пионов"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="styles" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-4">Стили флористики</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Каждый стиль отражает эпоху и философию. Выберите тот, который близок вашей душе.
          </p>
          
          <Tabs defaultValue="classic" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="classic">Классический</TabsTrigger>
              <TabsTrigger value="modern">Современный</TabsTrigger>
              <TabsTrigger value="minimal">Минимализм</TabsTrigger>
              <TabsTrigger value="compare">Сравнение</TabsTrigger>
            </TabsList>

            <TabsContent value="classic" className="animate-fade-in">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-cormorant font-semibold mb-4">Классический стиль</h3>
                      <p className="text-muted-foreground mb-4">
                        Классическая флористика опирается на симметрию, баланс и традиционные формы. 
                        Этот стиль вне времени — элегантные округлые букеты, пышные композиции с розами, 
                        пионами и гортензиями.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Симметричные композиции</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Богатая цветовая палитра</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Традиционные цветы: розы, лилии, пионы</span>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
                      alt="Классический стиль"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="modern" className="animate-fade-in">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-cormorant font-semibold mb-4">Современный стиль</h3>
                      <p className="text-muted-foreground mb-4">
                        Современная флористика — это свобода выражения, асимметрия и эксперименты. 
                        Необычные сочетания текстур, неожиданные цветовые решения и авторский почерк.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Асимметричные формы</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Смелые цветовые контрасты</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Экзотические растения и декор</span>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
                      alt="Современный стиль"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="minimal" className="animate-fade-in">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-2xl font-cormorant font-semibold mb-4">Минимализм</h3>
                      <p className="text-muted-foreground mb-4">
                        Философия «меньше — значит больше». Каждый цветок имеет значение, 
                        пространство вокруг подчеркивает красоту простоты. Чистые линии и монохромные гаммы.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Минимум элементов</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Монохромная или нейтральная палитра</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-1" size={20} />
                          <span>Акцент на форме и текстуре</span>
                        </div>
                      </div>
                    </div>
                    <img
                      src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/9567d347-c07b-4ebb-8068-e30fdc1046fb.jpg"
                      alt="Минимализм"
                      className="rounded-lg shadow-lg w-full h-80 object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="compare" className="animate-fade-in">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-cormorant font-semibold mb-6 text-center">Сравнение стилей</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-3 px-4 font-semibold">Характеристика</th>
                          <th className="text-left py-3 px-4 font-semibold">Классический</th>
                          <th className="text-left py-3 px-4 font-semibold">Современный</th>
                          <th className="text-left py-3 px-4 font-semibold">Минимализм</th>
                        </tr>
                      </thead>
                      <tbody className="text-muted-foreground">
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Форма</td>
                          <td className="py-3 px-4">Симметричная</td>
                          <td className="py-3 px-4">Асимметричная</td>
                          <td className="py-3 px-4">Лаконичная</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Количество цветов</td>
                          <td className="py-3 px-4">Много</td>
                          <td className="py-3 px-4">Средне</td>
                          <td className="py-3 px-4">Мало</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-4 font-medium">Цветовая гамма</td>
                          <td className="py-3 px-4">Богатая</td>
                          <td className="py-3 px-4">Контрастная</td>
                          <td className="py-3 px-4">Монохромная</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 font-medium">Подходит для</td>
                          <td className="py-3 px-4">Свадьбы, юбилеи</td>
                          <td className="py-3 px-4">Корпоративы, выставки</td>
                          <td className="py-3 px-4">Современные интерьеры</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="encyclopedia" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-4">Энциклопедия цветов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Познакомьтесь с удивительным разнообразием цветов — от популярных до редких экземпляров.
          </p>

          <Tabs defaultValue="season" className="w-full">
            <TabsList className="grid w-full max-w-lg mx-auto grid-cols-3 mb-8">
              <TabsTrigger value="season">Сезонность</TabsTrigger>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="rare">Редкие</TabsTrigger>
            </TabsList>

            <TabsContent value="season" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { season: '🌸 Весна', flowers: 'Тюльпаны, нарциссы, гиацинты, ландыши, крокусы' },
                  { season: '☀️ Лето', flowers: 'Розы, пионы, лилии, ирисы, гортензии' },
                  { season: '🍂 Осень', flowers: 'Хризантемы, астры, георгины, подсолнухи' },
                  { season: '❄️ Зима', flowers: 'Амариллис, пуансеттия, морозник, цикламен' }
                ].map((item, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-cormorant font-semibold mb-3">{item.season}</h3>
                      <p className="text-sm text-muted-foreground">{item.flowers}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Роза', desc: 'Королева цветов. Символ любви и страсти. Более 30 000 сортов.', emoji: '🌹' },
                  { name: 'Тюльпан', desc: 'Весенний вестник. Родина — Средняя Азия. Свыше 3000 сортов.', emoji: '🌷' },
                  { name: 'Пион', desc: 'Роскошный цветок. Символ богатства и процветания в Китае.', emoji: '🌺' },
                  { name: 'Лилия', desc: 'Изящная и ароматная. Ассоциируется с чистотой и невинностью.', emoji: '🪷' },
                  { name: 'Гортензия', desc: 'Пышные шары соцветий. Цвет зависит от кислотности почвы.', emoji: '💐' },
                  { name: 'Подсолнух', desc: 'Солнечный гигант. Поворачивается вслед за солнцем.', emoji: '🌻' }
                ].map((flower, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{flower.emoji}</div>
                      <h3 className="text-xl font-cormorant font-semibold mb-2">{flower.name}</h3>
                      <p className="text-sm text-muted-foreground">{flower.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rare" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { 
                    name: 'Миддлемист красный', 
                    desc: 'Один из самых редких цветов в мире. Существует всего два известных экземпляра — в Великобритании и Новой Зеландии.',
                    rarity: 'Критически редкий'
                  },
                  { 
                    name: 'Орхидея Призрак', 
                    desc: 'Редкая орхидея без листьев. Растет в болотах Флориды и Кубы. Цветет редко и непредсказуемо.',
                    rarity: 'Под угрозой исчезновения'
                  },
                  { 
                    name: 'Кокия Кука', 
                    desc: 'Эндемик Гавайев. В дикой природе не встречается с 2009 года. Сохранен только в культуре.',
                    rarity: 'Вымерший в природе'
                  },
                  { 
                    name: 'Нефритовая лоза', 
                    desc: 'Редкая тропическая лиана с сине-зелеными цветами. Растет только на Филиппинах.',
                    rarity: 'Очень редкий'
                  }
                ].map((flower, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-cormorant font-semibold">{flower.name}</h3>
                        <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                          {flower.rarity}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{flower.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="care" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-4">Уход за цветами</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Правильный уход продлевает жизнь и красоту ваших цветов.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Sprout" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold">Комнатные растения</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Droplets" className="text-primary" size={18} />
                      Полив
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Регулярный, но умеренный. Проверяйте влажность почвы пальцем на глубине 2-3 см. 
                      Избегайте застоя воды в поддоне.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Sun" className="text-primary" size={18} />
                      Освещение
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Большинство комнатных растений предпочитают рассеянный свет. 
                      Избегайте прямых солнечных лучей в полдень.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Thermometer" className="text-primary" size={18} />
                      Температура
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Оптимально 18-24°C. Защищайте от сквозняков и резких перепадов температуры.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Leaf" className="text-primary" size={18} />
                      Подкормка
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      В период роста (весна-лето) раз в 2 недели комплексным удобрением. 
                      Зимой сократите до 1 раза в месяц.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Icon name="Scissors" className="text-primary" size={28} />
                  </div>
                  <h3 className="text-2xl font-cormorant font-semibold">Срезанные цветы</h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Scissors" className="text-primary" size={18} />
                      Подрезка
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Подрезайте стебли под углом 45° острым ножом под струей воды. 
                      Это обеспечит лучшее поглощение влаги.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Droplets" className="text-primary" size={18} />
                      Вода
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Используйте чистую отстоянную воду комнатной температуры. 
                      Меняйте воду каждые 2 дня.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Trash2" className="text-primary" size={18} />
                      Уход
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Удаляйте увядшие листья и цветы. Держите букет вдали от фруктов — 
                      этилен ускоряет увядание.
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Wind" className="text-primary" size={18} />
                      Расположение
                    </h4>
                    <p className="text-sm text-muted-foreground pl-6">
                      Избегайте прямых солнечных лучей, батарей и сквозняков. 
                      Прохладное место продлит жизнь букета.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="tools" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-4">Инструменты флориста</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональные инструменты для создания идеальных композиций.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Секатор',
                desc: 'Острый секатор — основной инструмент флориста. Делает чистые срезы без повреждения стеблей.',
                use: 'Для подрезки стеблей средней толщины'
              },
              {
                name: 'Флористический нож',
                desc: 'Изогнутое лезвие для точных срезов. Незаменим для подготовки стеблей под водой.',
                use: 'Для чистых косых срезов'
              },
              {
                name: 'Кусачки для проволоки',
                desc: 'Прочные кусачки для работы с каркасами и флористической проволокой.',
                use: 'Для создания каркасов композиций'
              },
              {
                name: 'Флористическая лента',
                desc: 'Самоклеящаяся лента для маскировки проволоки и фиксации элементов.',
                use: 'Для крепления и маскировки'
              },
              {
                name: 'Флористическая пена',
                desc: 'Оазис — влагоудерживающая пена для фиксации цветов в композициях.',
                use: 'Основа для букетов и композиций'
              },
              {
                name: 'Ленты и декор',
                desc: 'Атласные, органзовые ленты и декоративные элементы для оформления букетов.',
                use: 'Для финального оформления'
              }
            ].map((tool, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-cormorant font-semibold mb-2">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{tool.desc}</p>
                  <div className="text-xs bg-primary/10 text-primary px-3 py-2 rounded-md inline-block">
                    {tool.use}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/d8affe89-9ff6-4dde-8de9-9446e8c07443.jpg"
              alt="Инструменты флориста"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-cormorant font-bold text-center mb-4">Контакты</h2>
          <p className="text-center text-muted-foreground mb-12">
            Свяжитесь с нами для консультаций по флористике и заказа композиций.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-cormorant font-semibold mb-6">Наши контакты</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Адрес</p>
                      <p className="text-sm text-muted-foreground">Москва, ул. Цветочная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Телефон</p>
                      <p className="text-sm text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-sm text-muted-foreground">info@floristry-art.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Icon name="Clock" className="text-primary mt-1" size={20} />
                    <div>
                      <p className="font-semibold">Режим работы</p>
                      <p className="text-sm text-muted-foreground">Ежедневно с 9:00 до 21:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-cormorant font-semibold mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ваше сообщение"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-foreground text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-cormorant font-bold mb-2">Искусство Флористики</h3>
          <p className="text-sm opacity-80">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
