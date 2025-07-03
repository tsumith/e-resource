
import React, { useState, useEffect } from 'react';
import {
    BookOpen,
    Users,
    Download,
    Shield,
    Clock,
    Star,
    Search,
    User,
    Menu,
    X,
    GraduationCap,
    FileText,
    ChevronRight,
    Award,
    UserCheck,
    MessageCircle,
    Library,
    Globe,
    Lock
} from 'lucide-react';

const EResourcePlatform = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState('student');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');

    // Sample data
    const courses = [
        'Computer Science', 'Electrical Engineering', 'Mechanical Engineering',
        'Civil Engineering', 'Mathematics', 'Physics', 'Chemistry', 'Biology'
    ];

    const resources = [
        {
            id: 1,
            title: 'Advanced Data Structures',
            course: 'Computer Science',
            type: 'E-Book',
            author: 'Prof. Smith',
            downloads: 1250,
            verified: true
        },
        {
            id: 2,
            title: 'Circuit Analysis Fundamentals',
            course: 'Electrical Engineering',
            type: 'Study Material',
            author: 'Dr. Johnson',
            downloads: 890,
            verified: true
        },
        {
            id: 3,
            title: 'Thermodynamics Principles',
            course: 'Mechanical Engineering',
            type: 'E-Book',
            author: 'Prof. Williams',
            downloads: 1100,
            verified: true
        }
    ];

    const professors = [
        {
            id: 1,
            name: 'Dr. Sarah Chen',
            institute: 'MIT',
            specialization: 'Machine Learning',
            rating: 4.9,
            courses: 15
        },
        {
            id: 2,
            name: 'Prof. Michael Kumar',
            institute: 'Stanford',
            specialization: 'Quantum Physics',
            rating: 4.8,
            courses: 12
        },
        {
            id: 3,
            name: 'Dr. Emily Rodriguez',
            institute: 'Harvard',
            specialization: 'Bioengineering',
            rating: 4.9,
            courses: 18
        }
    ];

    const Navigation = () => (
        <nav className="bg-white shadow-lg sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <BookOpen className="h-8 w-8 text-blue-600" />
                            <span className="ml-2 text-xl font-bold text-gray-900">E-Resource Tech</span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium transition-colors`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveTab('resources')}
                            className={`${activeTab === 'resources' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium transition-colors`}
                        >
                            Resources
                        </button>
                        <button
                            onClick={() => setActiveTab('professors')}
                            className={`${activeTab === 'professors' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium transition-colors`}
                        >
                            Professors
                        </button>
                        <button
                            onClick={() => setActiveTab('reports')}
                            className={`${activeTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700 hover:text-blue-600'} px-3 py-2 text-sm font-medium transition-colors`}
                        >
                            Reports
                        </button>

                        {!isLoggedIn ? (
                            <button
                                onClick={() => setActiveTab('login')}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex items-center space-x-2">
                                <User className="h-5 w-5 text-gray-600" />
                                <span className="text-sm text-gray-700">Welcome, Student</span>
                                <button
                                    onClick={() => setIsLoggedIn(false)}
                                    className="text-sm text-red-600 hover:text-red-700"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 hover:text-blue-600"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 py-3 space-y-1">
                        <button
                            onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => { setActiveTab('resources'); setIsMenuOpen(false); }}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                        >
                            Resources
                        </button>
                        <button
                            onClick={() => { setActiveTab('professors'); setIsMenuOpen(false); }}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                        >
                            Professors
                        </button>
                        <button
                            onClick={() => { setActiveTab('reports'); setIsMenuOpen(false); }}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 w-full text-left"
                        >
                            Reports
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );

    const HomePage = () => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">
                            E-Resource Technology
                        </h1>
                        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Your trusted platform for official, verified educational resources and study materials from esteemed institutes
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setActiveTab('resources')}
                                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                            >
                                Explore Resources
                            </button>
                            <button
                                onClick={() => setActiveTab('login')}
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                            >
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose E-Resource Technology?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We provide verified, official resources that save time and ensure quality education
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-50 p-6 rounded-xl">
                            <Shield className="h-12 w-12 text-blue-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Verified & Legal</h3>
                            <p className="text-gray-600">All resources are from official sources and legally verified, ensuring safe downloads</p>
                        </div>

                        <div className="bg-green-50 p-6 rounded-xl">
                            <Clock className="h-12 w-12 text-green-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Time Efficient</h3>
                            <p className="text-gray-600">No more searching through irrelevant links - get exactly what you need instantly</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-xl">
                            <Users className="h-12 w-12 text-purple-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Expert Professors</h3>
                            <p className="text-gray-600">Connect with professors from esteemed institutes and get personalized guidance</p>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-xl">
                            <BookOpen className="h-12 w-12 text-orange-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">E-Book Library</h3>
                            <p className="text-gray-600">Access soft copies from renowned publication houses for comprehensive study</p>
                        </div>

                        <div className="bg-red-50 p-6 rounded-xl">
                            <Globe className="h-12 w-12 text-red-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Better Than Google</h3>
                            <p className="text-gray-600">Filtered, relevant results without spam or potentially harmful links</p>
                        </div>

                        <div className="bg-indigo-50 p-6 rounded-xl">
                            <MessageCircle className="h-12 w-12 text-indigo-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-3">Interactive Learning</h3>
                            <p className="text-gray-600">Direct interaction between students and professors for enhanced learning</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                            <div className="text-gray-600">Students Registered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
                            <div className="text-gray-600">Expert Professors</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-purple-600 mb-2">50,000+</div>
                            <div className="text-gray-600">Resources Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-orange-600 mb-2">100+</div>
                            <div className="text-gray-600">Partner Institutes</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const ResourcesPage = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Educational Resources</h1>
                    <p className="text-gray-600">Access verified study materials from top institutions</p>
                </div>

                {/* Search and Filter */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search resources..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>
                        <select
                            value={selectedCourse}
                            onChange={(e) => setSelectedCourse(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">All Courses</option>
                            {courses.map(course => (
                                <option key={course} value={course}>{course}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resources.map(resource => (
                        <div key={resource.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center">
                                        <FileText className="h-8 w-8 text-blue-600 mr-3" />
                                        <div>
                                            <h3 className="font-semibold text-gray-900">{resource.title}</h3>
                                            <p className="text-sm text-gray-600">{resource.course}</p>
                                        </div>
                                    </div>
                                    {resource.verified && (
                                        <div className="flex items-center text-green-600">
                                            <Shield className="h-4 w-4 mr-1" />
                                            <span className="text-xs">Verified</span>
                                        </div>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                        {resource.type}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                                    <span>By {resource.author}</span>
                                    <div className="flex items-center">
                                        <Download className="h-4 w-4 mr-1" />
                                        <span>{resource.downloads}</span>
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                                    {isLoggedIn ? (
                                        <>
                                            <Download className="h-4 w-4 mr-2" />
                                            Download Resource
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="h-4 w-4 mr-2" />
                                            Login to Access
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const ProfessorsPage = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Expert Professors</h1>
                    <p className="text-gray-600">Connect with professors from esteemed institutes worldwide</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {professors.map(professor => (
                        <div key={professor.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                            <div className="text-center mb-4">
                                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <GraduationCap className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="font-semibold text-gray-900">{professor.name}</h3>
                                <p className="text-sm text-gray-600">{professor.institute}</p>
                            </div>

                            <div className="space-y-2 mb-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Specialization:</span>
                                    <span className="font-medium">{professor.specialization}</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Rating:</span>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="ml-1 font-medium">{professor.rating}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Courses:</span>
                                    <span className="font-medium">{professor.courses}</span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                    Connect
                                </button>
                                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                    View Profile
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const ReportsPage = () => (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Reports & Analytics</h1>
                    <p className="text-gray-600">Comprehensive insights and performance reports</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900">Students Report</h3>
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">10,234</div>
                        <p className="text-sm text-gray-600">Active Students</p>
                        <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors text-sm">
                            View Detailed Report
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900">Professors Report</h3>
                            <GraduationCap className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="text-3xl font-bold text-green-600 mb-2">567</div>
                        <p className="text-sm text-gray-600">Expert Professors</p>
                        <button className="mt-4 w-full bg-green-50 text-green-600 py-2 px-4 rounded-lg hover:bg-green-100 transition-colors text-sm">
                            View Detailed Report
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900">Toppers Report</h3>
                            <Award className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="text-3xl font-bold text-yellow-600 mb-2">1,089</div>
                        <p className="text-sm text-gray-600">Top Performers</p>
                        <button className="mt-4 w-full bg-yellow-50 text-yellow-600 py-2 px-4 rounded-lg hover:bg-yellow-100 transition-colors text-sm">
                            View Detailed Report
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-900">Mentors Report</h3>
                            <UserCheck className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="text-3xl font-bold text-purple-600 mb-2">234</div>
                        <p className="text-sm text-gray-600">Active Mentors</p>
                        <button className="mt-4 w-full bg-purple-50 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-100 transition-colors text-sm">
                            View Detailed Report
                        </button>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="mt-8 bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Platform Usage Analytics</h3>
                    <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                            <Library className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-500">Interactive charts and analytics would be displayed here</p>
                            <p className="text-sm text-gray-400">Connect with backend for real-time data</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    const LoginPage = () => (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <div className="mx-auto h-12 w-12 flex items-center justify-center bg-blue-600 rounded-full">
                        <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Sign in to your account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Access verified educational resources
                    </p>
                </div>

                <div className="bg-white py-8 px-6 shadow rounded-lg">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            User Type
                        </label>
                        <select
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="student">Student</option>
                            <option value="professor">Professor</option>
                            <option value="mentor">Mentor</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        onClick={() => {
                            setIsLoggedIn(true);
                            setActiveTab('home');
                        }}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
                    >
                        Sign In
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button className="text-blue-600 hover:text-blue-500 font-medium">
                                Register here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return <HomePage />;
            case 'resources':
                return <ResourcesPage />;
            case 'professors':
                return <ProfessorsPage />;
            case 'reports':
                return <ReportsPage />;
            case 'login':
                return <LoginPage />;
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            {renderContent()}
        </div>
    );
};

export default EResourcePlatform;
