import React, { useState } from 'react';
import { Search, ArrowLeft, Home, Bookmark, User, X } from 'lucide-react';

const GameSitePlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [selectedRanking, setSelectedRanking] = useState('첫충보너스높은순');

  const categories = ['전체', '스포츠', '카지노', '슬롯게임', '미니게임'];
  const rankings = [
    '첫충보너스높은순', '매충높은순', '페이벡높은순', '이벤트많은순', '요율많은순',
    '롤링높은순', '가입인기순', '보험액높은순', '후기평점높은순', '올인쿠폰높은순'
  ];

  const gameSites = [
    {
      id: 1,
      name: '킹스포츠',
      rating: 4.5,
      description: '첫충보너스 최대 100만원, 매충보너스 최대 50만원',
      badge: 'BEST',
      badgeColor: 'bg-red-500',
      amount: '900만원',
      bgColor: 'from-red-400 to-red-600'
    },
    {
      id: 2,
      name: '럭키게임',
      rating: 4.2,
      description: '매충보너스 최대 80만원, 이벤트 다수 운영',
      badge: 'HOT',
      badgeColor: 'bg-green-500',
      amount: '500만원',
      bgColor: 'from-green-400 to-green-600'
    },
    {
      id: 3,
      name: '파워볼게임',
      rating: 4.8,
      description: '높은 롤링 지급, 다양한 미니게임 운영',
      badge: 'NEW',
      badgeColor: 'bg-orange-500',
      amount: '300만원',
      bgColor: 'from-purple-400 to-purple-600'
    }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center text-yellow-500 text-sm">
        <span>{rating}</span>
        <span className="ml-1">
          {'★'.repeat(fullStars)}
          {hasHalfStar ? '☆' : ''}
          {'☆'.repeat(5 - Math.ceil(rating))}
        </span>
      </div>
    );
  };

  return (
    <div className="max-w-sm mx-auto bg-white min-h-screen">
      {/* 헤더 */}
      <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
        <ArrowLeft className="w-6 h-6 text-gray-800" />
        <h1 className="text-lg font-bold text-gray-800">게임사이트 검색</h1>
        <div className="w-6"></div>
      </header>

      {/* 검색바 */}
      <div className="p-4">
        <div className="flex items-center bg-gray-50 rounded-xl border border-gray-200">
          <Search className="w-5 h-5 text-gray-400 ml-3" />
          <input 
            type="text" 
            placeholder="게임사이트 검색" 
            defaultValue="Online Gambling Sites"
            className="flex-1 bg-transparent border-none outline-none text-gray-800 px-3 py-3"
          />
          <X className="w-5 h-5 text-gray-400 mr-3" />
        </div>
      </div>

      {/* 카테고리 필터 */}
      <div className="px-4 pb-4">
        <div className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedCategory === category 
                  ? 'bg-gray-800 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 랭킹검색순 */}
      <div className="px-4 pb-4">
        <h3 className="text-lg font-bold text-gray-800 mb-3">랭킹검색순</h3>
        <div className="flex gap-2 overflow-x-auto">
          {rankings.map((ranking) => (
            <button
              key={ranking}
              onClick={() => setSelectedRanking(ranking)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                selectedRanking === ranking 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {ranking}
            </button>
          ))}
        </div>
      </div>

      {/* 결과 */}
      <div className="px-4 pb-20">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Results</h3>
        
        {gameSites.map((site) => (
          <div key={site.id} className="bg-white border border-gray-200 rounded-xl mb-4 overflow-hidden shadow-sm">
            <div className="flex">
              {/* 좌측 이미지 */}
              <div className="w-32 h-24">
                <div className={`w-full h-full bg-gradient-to-br ${site.bgColor} flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm text-center px-2">
                    {site.name}
                  </span>
                </div>
              </div>
              
              {/* 우측 정보 */}
              <div className="flex-1 p-4">
                {renderStars(site.rating)}
                <h4 className="font-bold text-gray-800 mb-1 text-base">{site.name}</h4>
                <p className="text-gray-600 text-sm mb-2 leading-relaxed">{site.description}</p>
                
                {/* 배지 */}
                <div className="flex gap-2 mb-3">
                  <span className={`${site.badgeColor} text-white px-2 py-1 rounded-full text-xs font-semibold`}>
                    {site.badge}
                  </span>
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                    {site.amount}
                  </span>
                </div>
                
                {/* 버튼 */}
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                  바로가기
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 하단 네비게이션 */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-sm mx-auto bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          <div className="flex flex-col items-center p-2 text-red-500">
            <Home className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">홈</span>
          </div>
          <div className="flex flex-col items-center p-2 text-gray-400">
            <Search className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">검색</span>
          </div>
          <div className="flex flex-col items-center p-2 text-gray-400">
            <Bookmark className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">즐겨찾기</span>
          </div>
          <div className="flex flex-col items-center p-2 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs mt-1 font-medium">프로필</span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default GameSitePlatform;