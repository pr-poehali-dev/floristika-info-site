import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const CutFlowerCare = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-cormorant font-bold text-primary mb-4">Уход за срезанными цветами</h1>
          <p className="text-lg text-muted-foreground mb-12">
            Как продлить жизнь букету и сохранить его красоту
          </p>

          <div className="mb-12">
            <img 
              src="https://cdn.poehali.dev/projects/e1ddac3a-6cc5-4fe1-9c4d-f2be79cccc33/files/6bc9d80f-4388-4052-bf38-e23353fecc39.jpg"
              alt="Срезанные цветы"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          <Card className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Clock" className="text-primary" />
                Первые действия после покупки
              </CardTitle>
              <CardDescription>Критически важные первые часы</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Распакуйте немедленно</h4>
                    <p className="text-sm text-muted-foreground">Снимите упаковку, чтобы цветы могли дышать</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Подрежьте стебли</h4>
                    <p className="text-sm text-muted-foreground">Обрежьте на 1-2 см под углом 45° острым ножом или секатором</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Удалите нижние листья</h4>
                    <p className="text-sm text-muted-foreground">Все листья, которые будут в воде, нужно убрать</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Поставьте в воду</h4>
                    <p className="text-sm text-muted-foreground">Используйте чистую вазу и свежую отстоянную воду</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Droplets" className="text-primary" />
                  Вода и ваза
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Требования к воде:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Отстоянная или фильтрованная вода комнатной температуры</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Меняйте воду каждые 1-2 дня</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Добавьте подкормку для срезанных цветов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Альтернатива: таблетка аспирина или ложка сахара + капля отбеливателя</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Совет:</strong> Промывайте вазу мыльной водой при каждой смене воды, чтобы удалить бактерии.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Scissors" className="text-primary" />
                  Обрезка стеблей
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Правильная техника:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Режьте под углом 45° для большей площади впитывания</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Используйте острый нож или секатор</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Обрезайте под водой или сразу ставьте в воду</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span>Подрезайте каждые 2-3 дня на 1 см</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Важно:</strong> Никогда не используйте тупые ножницы - они сдавливают стебель и закупоривают сосуды.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="MapPin" className="text-primary" />
                Расположение букета
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="Check" className="text-green-500" />
                    Хорошо
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Прохладное место без прямых солнечных лучей</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Вдали от отопительных приборов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Без сквозняков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Вдали от фруктов (особенно яблок и бананов)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Plus" size={16} className="text-green-500 mt-1 flex-shrink-0" />
                      <span>Температура 18-22°C</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon name="X" className="text-red-500" />
                    Плохо
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Прямые солнечные лучи</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Рядом с батареями или кондиционерами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>На сквозняке</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>Рядом с фруктами (этилен ускоряет увядание)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Minus" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                      <span>В слишком теплом помещении</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="font-cormorant flex items-center gap-2">
                <Icon name="Flower2" className="text-primary" />
                Особенности ухода за разными цветами
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Розы</h4>
                  <p className="text-sm text-muted-foreground">
                    Удаляйте шипы и листья, обрезайте под углом. Меняйте воду ежедневно. Стоят 5-7 дней.
                  </p>
                </div>
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Тюльпаны</h4>
                  <p className="text-sm text-muted-foreground">
                    Обрезайте прямо, держите в холодной воде. Продолжают расти в вазе. Стоят 5-7 дней.
                  </p>
                </div>
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Лилии</h4>
                  <p className="text-sm text-muted-foreground">
                    Удаляйте пыльники, чтобы не пачкались лепестки и дольше стояли. Стоят 7-10 дней.
                  </p>
                </div>
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Хризантемы</h4>
                  <p className="text-sm text-muted-foreground">
                    Ломайте стебли или делайте крестообразный надрез. Удаляйте листья под водой. Стоят 10-14 дней.
                  </p>
                </div>
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Гортензии</h4>
                  <p className="text-sm text-muted-foreground">
                    Погрузите полностью в воду на час после покупки. Опрыскивайте ежедневно. Стоят 5-7 дней.
                  </p>
                </div>
                <div className="border-l-4 border-l-primary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Альстромерии</h4>
                  <p className="text-sm text-muted-foreground">
                    Очень неприхотливы, убирайте увядшие цветки. Стоят до 2 недель.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="Lightbulb" className="text-primary" />
                  Полезные советы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>На ночь ставьте букет в прохладное место (можно в холодильник)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Удаляйте увядшие цветы из букета, они портят остальные</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Опрыскивайте букет из пульверизатора (кроме орхидей и гербер)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Star" size={16} className="text-primary mt-1 flex-shrink-0" />
                    <span>Не ставьте вместе розы и гвоздики - они несовместимы</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-cormorant flex items-center gap-2">
                  <Icon name="AlertCircle" className="text-primary" />
                  Признаки проблем
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" size={16} className="text-yellow-500 mt-1 flex-shrink-0" />
                    <span>Вялые стебли - меняйте воду, подрезайте стебли</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span>Мутная вода - размножились бактерии, срочно меняйте</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" size={16} className="text-red-500 mt-1 flex-shrink-0" />
                    <span>Поникшие головки - недостаток воды, освежите срез</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="AlertTriangle" size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                    <span>Желтеющие листья - слишком тепло или старая вода</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CutFlowerCare;
