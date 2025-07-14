import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Calculator" className="text-green-600" size={32} />
              <span className="text-2xl font-bold text-gray-900">Оценка Имущества</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-gray-600 hover:text-green-600 transition-colors">Услуги</a>
              <a href="#prices" className="text-gray-600 hover:text-green-600 transition-colors">Цены</a>
              <a href="#faq" className="text-gray-600 hover:text-green-600 transition-colors">Вопросы</a>
              <a href="#contact" className="text-gray-600 hover:text-green-600 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="outline" className="mb-6 text-green-600 border-green-300">
            Сертифицированный оценщик
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Профессиональная оценка
            <span className="block text-green-600">недвижимости и имущества</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Быстро, точно, надежно. Работаю в Ростове-на-Дону и по всей России. 
            Возможна удаленная оценка в области.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <Icon name="Phone" className="mr-2" size={20} />
              Заказать оценку
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать прайс
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Услуги оценки</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Предоставляю полный спектр оценочных услуг для различных видов имущества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Home" className="text-green-600" size={24} />
                  <CardTitle className="text-xl">Недвижимость</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Оценка квартир, домов, коммерческой недвижимости, земельных участков
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Квартиры</Badge>
                  <Badge variant="secondary">Дома</Badge>
                  <Badge variant="secondary">Участки</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Car" className="text-blue-600" size={24} />
                  <CardTitle className="text-xl">Транспорт</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Легковые автомобили, грузовик, спецтехника, мотоциклы
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Авто</Badge>
                  <Badge variant="secondary">Грузовики</Badge>
                  <Badge variant="secondary">Спецтехника</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Package" className="text-purple-600" size={24} />
                  <CardTitle className="text-xl">Оборудование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Промышленное оборудование, станки, компьютерная техника
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Станки</Badge>
                  <Badge variant="secondary">Компьютеры</Badge>
                  <Badge variant="secondary">Техника</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Briefcase" className="text-orange-600" size={24} />
                  <CardTitle className="text-xl">Бизнес</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Оценка предприятий, акций, долей в уставном капитале
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Предприятия</Badge>
                  <Badge variant="secondary">Акции</Badge>
                  <Badge variant="secondary">Доли</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Gem" className="text-red-600" size={24} />
                  <CardTitle className="text-xl">Ценности</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Драгоценности, антиквариат, произведения искусства
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Украшения</Badge>
                  <Badge variant="secondary">Антиквариат</Badge>
                  <Badge variant="secondary">Искусство</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-2">
                  <Icon name="Shield" className="text-teal-600" size={24} />
                  <CardTitle className="text-xl">Страхование</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  Оценка для страховых случаев, ущерба, восстановительной стоимости
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Ущерб</Badge>
                  <Badge variant="secondary">Страховка</Badge>
                  <Badge variant="secondary">Компенсация</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Цены на услуги</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Прозрачные цены без скрытых комиссий. Стоимость зависит от сложности объекта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-green-200">
              <CardHeader className="bg-green-50">
                <CardTitle className="text-xl text-green-800">Недвижимость</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Квартира</span>
                    <span className="font-semibold">от 3 500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Дом</span>
                    <span className="font-semibold">от 5 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Участок</span>
                    <span className="font-semibold">от 4 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Коммерческая</span>
                    <span className="font-semibold">от 8 000 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-xl text-blue-800">Транспорт</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Легковой автомобиль</span>
                    <span className="font-semibold">от 2 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Грузовик</span>
                    <span className="font-semibold">от 3 500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Спецтехника</span>
                    <span className="font-semibold">от 4 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Мотоцикл</span>
                    <span className="font-semibold">от 1 500 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-200">
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-xl text-purple-800">Оборудование</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Станки и оборудование</span>
                    <span className="font-semibold">от 5 000 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Компьютеры</span>
                    <span className="font-semibold">от 1 500 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Офисная техника</span>
                    <span className="font-semibold">от 1 200 ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Инструменты</span>
                    <span className="font-semibold">от 800 ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Точная стоимость рассчитывается индивидуально в зависимости от сложности объекта
            </p>
            <Button className="bg-green-600 hover:bg-green-700">
              Получить точную стоимость
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ответы на самые популярные вопросы об оценке имущества
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  Сколько времени занимает оценка?
                </AccordionTrigger>
                <AccordionContent>
                  Обычно оценка занимает 1-3 рабочих дня. Срок зависит от сложности объекта и типа оценки. 
                  Для квартир и автомобилей - 1-2 дня, для сложных объектов может потребоваться до 5 дней.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Какие документы нужны для оценки?
                </AccordionTrigger>
                <AccordionContent>
                  Для недвижимости: правоустанавливающие документы, техпаспорт, справка о кадастровой стоимости. 
                  Для транспорта: ПТС, СТС, паспорт владельца. Полный список документов предоставлю при заказе.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  Возможна ли удаленная оценка?
                </AccordionTrigger>
                <AccordionContent>
                  Да, для некоторых видов имущества возможна удаленная оценка. Это подходит для стандартных объектов, 
                  когда есть полный комплект документов и качественные фотографии. Работаю удаленно по Ростовской области и всей России.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  Для чего нужна оценка?
                </AccordionTrigger>
                <AccordionContent>
                  Оценка нужна для продажи/покупки, страхования, получения кредита, раздела имущества, 
                  наследства, судебных разбирательств, налогообложения и многих других целей.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  Есть ли гарантия на отчет?
                </AccordionTrigger>
                <AccordionContent>
                  Да, все отчеты застрахованы. Гарантирую качество и точность оценки в соответствии с российским законодательством. 
                  Отчеты имеют юридическую силу и принимаются всеми государственными органами.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Свяжитесь со мной для получения консультации и заказа оценки
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Icon name="Phone" className="mx-auto text-green-600 mb-2" size={32} />
                <CardTitle>Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">+7 (863) 123-45-67</p>
                <p className="text-gray-600">Звонки принимаю с 9:00 до 18:00</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="Mail" className="mx-auto text-blue-600 mb-2" size={32} />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">info@ocenka-rostov.ru</p>
                <p className="text-gray-600">Отвечаю в течение 2 часов</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Icon name="MapPin" className="mx-auto text-purple-600 mb-2" size={32} />
                <CardTitle>Адрес</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">Ростов-на-Дону</p>
                <p className="text-gray-600">Выезд по городу и области</p>
              </CardContent>
            </Card>
          </div>
          
          <Separator className="my-12" />
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы заказать оценку?</h3>
            <p className="text-gray-600 mb-6">
              Получите профессиональную оценку вашего имущества быстро и недорого
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить сейчас
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Calculator" className="text-green-400" size={24} />
              <span className="text-xl font-bold">Оценка Имущества</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400">© 2024 Услуги оценщика в Ростове-на-Дону</p>
              <p className="text-gray-400 text-sm">Сертифицированный оценщик</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;